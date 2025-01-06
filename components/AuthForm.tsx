"use client";

import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver }  from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
});

type FormType = "sign-in" | "sign-up"

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='auth-form'>
          <h1 className='form-title'>
            {type === "sign-up" ? "Sign Up" : "Sign In"}
          </h1>
          {type === "sign-up" && <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <div className='shad-form-item'>
                  <FormLabel className='shad-form-label'>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter Your Full Name' className='shad-input' {...field} />
                  </FormControl>
                </div>
                <FormMessage className='shad-form-message' />
              </FormItem>
            )}
          />}

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <div className='shad-form-item'>
                  <FormLabel className='shad-form-label'>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter Your Email' className='shad-input' {...field} />
                  </FormControl>
                </div>
                <FormMessage className='shad-form-message' />
              </FormItem>
            )}
          />

          <Button type='submit' className='form-submit-button' disabled={isLoading}>
            {type === "sign-up" ? "Sign Up" : "Sign In"}
            {isLoading && <Image src="/assets/icons/loader.svg" alt='loader' width={24} height={24} className='ml-2 animate-spin' />}
          </Button>
          {errorMessage && <p className='error-message'>*{errorMessage}</p>}
          <div className='body-2 flex justify-center'>
            <p className='text-light-100'>
              {type === "sign-up" ? "Already have an account?" : "Don't have an account?"}
            </p>
            <Link href={type === "sign-up" ? "/sign-in" : "/sign-up"} className='ml-1 font-medium text-brand'>{type === "sign-up" ? "Sign In" : "Sign Up"}</Link>
          </div>
        </form>
      </Form>
      {/* OTP VERIFICATION LATER */}
    </>
  )
}

export default AuthForm