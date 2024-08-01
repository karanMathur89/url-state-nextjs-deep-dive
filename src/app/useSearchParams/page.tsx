"use client"

import { z } from "zod"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

//? Colors Schema
const colorVariants = ["black", "white", "blue"] as const
const DEFAULT_COLOR = colorVariants[0]
const ColorEnum = z.enum(colorVariants)

//? Sizes Schema
const sizeVariants = ["xs", "s", "md", "l", "xl"] as const
const DEFAULT_SIZE = sizeVariants[2]
const SizeEnum = z.enum(sizeVariants)

export default function WithUseSearchParamsExample() {
  const searchParams = useSearchParams()

  //* URL STATE
  //? if user manually changes color param to an invalid value, use DEFAULT_COLOR
  const paramColor = searchParams.get("color")
  const parsedColor = ColorEnum.safeParse(paramColor)
  const selectedColor = parsedColor.success ? parsedColor.data : DEFAULT_COLOR

  //? if user manually changes size param to an invalid value, use DEFAULT_SIZE
  const paramSize = searchParams.get("size")
  const parsedSize = SizeEnum.safeParse(paramSize)
  const selectedSize = parsedSize.success ? parsedSize.data : DEFAULT_SIZE

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
      <Features />
    </main>
  )
}

function Features() {
  return (
    <section className="mt-48 rounded border border-current bg-emerald-100/20 p-4 text-emerald-700">
      <h2 className="mb-4 text-2xl font-semibold">Features</h2>
      <ul className="list-inside list-disc space-y-4">
        <li>
          If the user manually changes the params, switch to a default value.
        </li>
      </ul>
    </section>
  )
}
