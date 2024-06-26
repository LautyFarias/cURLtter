"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { URLSchema } from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export type URLFormValues = z.infer<typeof URLSchema>

interface URLFormProps {
  onSubmit: ({ url }: URLFormValues) => void
}

export function URLForm({ onSubmit }: URLFormProps) {
  const form = useForm<URLFormValues>({
    resolver: zodResolver(URLSchema),
    defaultValues: {
      url: "",
    },
  })

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-screen-lg"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="h-12 rounded-r-none text-lg"
                  placeholder="URL"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-md text-center text-red-400" />
            </FormItem>
          )}
        />
        <Button className="h-12 w-24 rounded-l-none text-lg" type="submit">
          Cut!
        </Button>
      </form>
    </Form>
  )
}
