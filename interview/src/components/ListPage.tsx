import {
    Container,
    Title,
    Table,
    Loader,
    TextInput,
    Select,
    ScrollArea,
    Text,
    Paper,
    Center,
    Group,
    Button,
    Pagination,
} from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useMemo, useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import useAppStore from '../store/app.store'

interface Launch {
    id: string
    name: string
    date_utc: string
    success: boolean
    details: string | null
}

const fetchLaunches = async (): Promise<Launch[]> => {
    const res = await fetch('https://api.spacexdata.com/v4/launches')
    if (!res.ok) throw new Error('Failed to fetch SpaceX launches')
    return res.json()
}

const ListPage = () => {
    const navigate = useNavigate()
    const { logout } = useAppStore()
    const { data, isLoading, isError } = useQuery(['launches'], fetchLaunches)

    const [searchParams, setSearchParams] = useSearchParams()

    const [search, setSearch] = useState(searchParams.get('search') || '')
    const [status, setStatus] = useState<string | null>(searchParams.get('status'))
    const [sortOrder] = useState<'asc' | 'desc'>('desc')
    const [currentPage, setCurrentPage] = useState(
        parseInt(searchParams.get('page') || '1', 10)
    )

    const itemsPerPage = 15

    useEffect(() => {
        const params = new URLSearchParams()

        if (search) params.set('search', search)
        if (status) params.set('status', status)
        if (currentPage !== 1) params.set('page', String(currentPage))

        setSearchParams(params)
    }, [search, status, currentPage])

    const filtered = useMemo(() => {
        if (!data) return []

        let result = [...data]

        if (search) {
            result = result.filter((launch) =>
                launch.name.toLowerCase().includes(search.toLowerCase())
            )
        }

        if (status !== null) {
            result = result.filter((l) =>
                status === 'success'
                    ? l.success === true
                    : status === 'failure'
                        ? l.success === false
                        : true
            )
        }

        result.sort((a, b) => {
            const dateA = new Date(a.date_utc).getTime()
            const dateB = new Date(b.date_utc).getTime()
            return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
        })

        return result
    }, [data, search, status, sortOrder])

    const totalPages = Math.ceil(filtered.length / itemsPerPage)

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return filtered.slice(startIndex, endIndex)
    }, [filtered, currentPage])

    if (isLoading) {
        return (
            <Container my="xl">
                <Center>
                    <Loader />
                </Center>
            </Container>
        )
    }

    if (isError || !data) {
        return (
            <Container my="xl">
                <Text color="red">Failed to fetch launches.</Text>
            </Container>
        )
    }

    return (
        <Container my="xl">
            <Group position="apart" mb="md">
                <Button
                    component={Link}
                    to="/"
                    variant="light"
                    color="teal"
                    size="sm"
                >
                    ← Home
                </Button>

                <Button
                    variant="outline"
                    color="red"
                    size="sm"
                    onClick={() => {
                        logout()
                        navigate('/login')
                    }}
                >
                    Logout
                </Button>
            </Group>
            <Title order={2} mb="lg">SpaceX Launches</Title>

            <Group mb="md" grow>
                <TextInput
                    placeholder="Search by launch name"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.currentTarget.value)
                        setCurrentPage(1)
                    }}
                    label="Search"
                />

                <Select
                    label="Filter by Status"
                    data={[
                        { value: 'success', label: 'Success' },
                        { value: 'failure', label: 'Failure' },
                    ]}
                    placeholder="Status"
                    value={status}
                    onChange={(value) => {
                        setStatus(value)
                        setCurrentPage(1)
                    }}
                    clearable
                />
            </Group>

            <ScrollArea>
                <Paper withBorder radius="md" p="md">
                    <Table striped highlightOnHover>
                        <thead>
                            <tr>
                                <th>Launch Name</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((launch) => (
                                <tr key={launch.id}>
                                    <td>
                                        <Link to={`/detail/${launch.id}`}>{launch.name}</Link>
                                    </td>
                                    <td>{new Date(launch.date_utc).toLocaleDateString()}</td>
                                    <td>
                                        {launch.success === true
                                            ? 'Success'
                                            : launch.success === false
                                                ? 'Failure'
                                                : '—'}
                                    </td>
                                    <td>{launch.details ? launch.details.slice(0, 50) + '...' : '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Paper>
            </ScrollArea>

            <Center mt="md">
                <Pagination
                    value={currentPage}
                    onChange={setCurrentPage}
                    total={totalPages}
                    color="teal"
                />
            </Center>
        </Container>
    )
}

export default ListPage