import {
    Container,
    Title,
    Text,
    Loader,
    Paper,
    Center,
    Badge,
    Stack,
    Image,
    Button,
  } from '@mantine/core'
  import { useParams, useNavigate } from 'react-router-dom'
  import { useQuery } from '@tanstack/react-query'
  
  interface Launch {
    name: string
    date_utc: string
    success: boolean
    details: string | null
    links: {
      webcast: string | null
      article: string | null
      wikipedia: string | null
      patch: { small: string | null; large: string | null }
      youtube_id: string | null
    }
  }
  
  const fetchLaunchById = async (id: string): Promise<Launch> => {
    const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
    if (!res.ok) throw new Error('Failed to fetch launch details')
    return res.json()
  }
  
  const DetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const { data, isLoading, isError } = useQuery(['launch', id], () =>
      fetchLaunchById(id!)
    )
  
    if (isLoading) {
      return (
        <Container my="xl">
          <Center><Loader /></Center>
        </Container>
      )
    }
  
    if (isError || !data) {
      return (
        <Container my="xl">
          <Text color="red">Failed to load launch details.</Text>
        </Container>
      )
    }
  
    return (
      <Container my="xl">
        <Paper withBorder p="lg" radius="md">
          <Stack spacing="md">
            <Button onClick={() => navigate(-1)} variant="light" color="blue">
              Back
            </Button>
  
            <Title order={2}>{data.name}</Title>
            <Text size="sm" color="dimmed">
              Date: {new Date(data.date_utc).toLocaleString()}
            </Text>
            <Badge color={data.success ? 'green' : 'red'}>
              {data.success ? 'Success' : 'Failure'}
            </Badge>
  
            {data.links?.patch?.large ? (
              <Image
                src={data.links.patch.large}
                alt="Mission Patch"
                maw={200}
                radius="md"
              />
            ) : (
              <Text color="dimmed">No mission patch available.</Text>
            )}
  
            <Text>{data.details || 'No details available.'}</Text>
  
            {data.links?.youtube_id && (
              <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${data.links.youtube_id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Launch webcast"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                ></iframe>
              </div>
            )}
  
            {data.links?.wikipedia && (
              <Text>
                <a href={data.links.wikipedia} target="_blank" rel="noreferrer">
                  Read more on Wikipedia
                </a>
              </Text>
            )}
          </Stack>
        </Paper>
      </Container>
    )
  }
  
  export default DetailsPage