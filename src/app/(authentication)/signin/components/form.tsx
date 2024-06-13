"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .refine((value) => value.length >= 8 && value.length <= 50, {
      message: "Password must be between 8 and 50 characters",
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "Password must contain at least one number",
    })
    .refine((value) => !/123/.test(value), {
      message: 'Password should not contain the sequence "123"',
    })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must contain at least one uppercase character",
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "Password must contain at least one lowercase character",
    })
    .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(value), {
      message: "Password must contain at least one special character",
    }),
});

export function SigninForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: "",
    },
  });

  const router = useRouter();
  const handleLoginRoute = () => {
    router.push(`/signup`);
  };

  function onSubmit(data: z.infer<typeof loginSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[90%] md:w-[40%] rounded-[10px] bg-[#fff] border border-[#D0D5DD] flex flex-col items-center px-7 py-8"
      >
        <div className="flex flex-col items-center gap-2 mb-[32px]">
          <h1 className="text-[#101928] font-[600] leading-[33.6px] text-[28px]">
            Log In
          </h1>
          <p className="text-[#667185] font-[400] leading-[23.2px] text-[16px]">
            Enter your credentials to access your account
          </p>
        </div>
        <div className="flex flex-col items-center w-full gap-6 mb-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[#101928] font-[500] leading-[20.2px] text-[14px]">
                  EMAIL ADDRESS
                </FormLabel>
                <FormControl>
                  <Input
                    className="min-h-[56px] rounded-[6px] border border-[#D0D5DD]"
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-[#101928] font-[500] leading-[20.2px] text-[14px]">
                  CREATE PASSWORD
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    icon="show"
                    className="min-h-[56px] rounded-[6px] border border-[#D0D5DD]"
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full h-[55px]"
            type="submit"
            variant={"default"}
          >
            Log Into Account
          </Button>
        </div>
        <p className="text-[#98A2B3] font-[500] leading-[17.5px] text-[14px]">
          Are u new here?{" "}
          <span
            onClick={handleLoginRoute}
            className="text-[#3976E8] hover:text-[#93b8fd] cursor-pointer"
          >
            Create Account
          </span>
        </p>
      </form>
    </Form>
  );
}
