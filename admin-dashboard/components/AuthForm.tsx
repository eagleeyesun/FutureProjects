"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm, UseFormReturn, } from "react-hook-form"
import { ZodType } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FIELD_NAMES, FIELD_TYPES } from "@/constants"
import ImageUpload from "./ImageUpload"

interface Props<T extends FieldValues> {
    schema: ZodType<T>
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean, error?: string }>
    type: "SIGN_IN" | "SIGN_UP"
}

const AuthForm = <T extends FieldValues>({
    type,
    schema,
    defaultValues,
    onSubmit,
}: Props<T>) => {
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>
    })

    const isSignIn = type === 'SIGN_IN'

    const handleSubmit: SubmitHandler<T> = async (data) => {
        console.log(data)
    }
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-white">
                {isSignIn ? "Welcome to the Bookwise" : "Create your library account"}
            </h1>
            <p className="text-[#D6E0FF]">
                {isSignIn ? "Access the vast collection of resources, and stay updated" : "Please complete all fields and upload a valid university ID to gain access to the library"}
            </p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            key={field}
                            control={form.control}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="capitalize">
                                        {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                                    </FormLabel>
                                    <FormControl>
                                        {field.name === 'universityCard' ? (
                                            <ImageUpload onFileChange={field.onChange}/>
                                        ) : (
                                            <Input required
                                                type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                                                {...field}
                                                className="w-full min-h-14 border-none text-base font-bold placeholder:font-normal text-white placeholder:text-[#D6E0FF] focus-visible:ring-0 focus-visible:shadow-none bg-[#232839]"
                                            />
                                        )}

                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ))}

                    <Button type="submit" className="bg-[#E7C9A5] mt-3 min-h-14 text-[#14171C] text-base bebas-neue w-full rounded-xl">
                      {isSignIn ? "Sign In": "Sign Up"}
                    </Button>
                </form>
            </Form>
            <p className="text-base text-center font-medium">
                {isSignIn ? "New to Bookwise? " : "Already have an account?"}

                <Link href={isSignIn ? '/sign-up' : '/sign-in'} className="font-bold text-[#E7C9A5]">
                    {isSignIn ? "Create an account" : " Sign In "}
                </Link>
            </p>
        </div>

    )
}

export default AuthForm