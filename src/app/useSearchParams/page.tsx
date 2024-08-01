"use client"

import { z } from "zod"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"

const colorVariants = ["black", "white", "blue"]
const sizeVariants = ["xs", "s", "md", "l", "xl"]

export default function WithUseSearchParamsExample() {
  //* URL STATE
  const searchParams = useSearchParams()
  const selectedColor = searchParams.get("color") || "blue"
  const selectedSize = searchParams.get("size") || "md"

  return (
    <main>
      <h1 className="mb-48 text-3xl font-bold">With useSearchParams</h1>
      <section className="rounded bg-gray-100 p-4">
        <h2 className="mb-1 text-2xl font-bold">Snug T-shirt</h2>
        <span className="text inline-block rounded-full bg-blue-600 px-2 py-1 text-sm font-medium text-blue-50">
          $20.00
        </span>
        <div className="mt-6 grid grid-cols-6 gap-4">
          <div className="col-start-1 col-end-3 grid w-full items-center rounded border border-dashed border-gray-400 bg-white">
            <div
              className={cn([
                "mx-auto aspect-square w-1/2 rounded outline outline-offset-4",
                { "bg-black": selectedColor === "black" },
                { "bg-white": selectedColor === "white" },
                { "bg-blue-600 outline-blue-600": selectedColor === "blue" },
              ])}
            ></div>
          </div>
          <div className="col-start-3 -col-end-1 space-y-6">
            <section className="space-y-2">
              <h3 className="font-medium uppercase tracking-tight">Colour</h3>
              <ul className="flex flex-wrap gap-2">
                {colorVariants.map((color) => (
                  <li key={color}>
                    <Link
                      href={`?color=${color}&size=${selectedSize}`}
                      className={cn([
                        "rounded-full border-2 border-gray-300 bg-gray-50 px-3 py-1 capitalize hover:bg-white",
                        { "border-blue-600": color === selectedColor },
                      ])}
                    >
                      {color}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section className="space-y-2">
              <h3 className="font-medium uppercase tracking-tight">Sizes</h3>
              <ul className="flex flex-wrap gap-2">
                {sizeVariants.map((size) => (
                  <li key={size}>
                    <Link
                      href={`?color=${selectedColor}&size=${size}`}
                      className={cn([
                        "min-w-[5ch] rounded-full border-2 border-gray-300 bg-gray-50 px-3 py-1 uppercase hover:bg-white",
                        { "border-blue-600": size === selectedSize },
                      ])}
                    >
                      {size}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
