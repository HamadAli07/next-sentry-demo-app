'use client'
import React from 'react'
import { useEffect } from 'react'
import * as Sentry from "@sentry/nextjs";

export default function ExamplePage () {

    useEffect(() => {
        try {
            myUndefinedFunction();
        } catch (error) {
            Sentry.captureException(error);
        }
    }, []);

  return (
    <div className = "flex justify-center items-center h-screen">
      Sample page for undefined function call
    </div>
  )
}

