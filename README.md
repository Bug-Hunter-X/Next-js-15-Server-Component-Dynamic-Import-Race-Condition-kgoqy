# Next.js 15 Server Component Dynamic Import Race Condition

This repository demonstrates a race condition that can occur in Next.js 15 server components when using dynamic imports within loops. The problem arises from the asynchronous nature of `fetch` calls not being properly handled, resulting in inconsistent data rendering.

## Bug Description

The core issue lies in the unawaited nature of the `fetch` calls inside the loop.  This leads to unpredictable order of execution and potential data inconsistencies.  The component might render with data from some requests completing while others are still pending, causing data corruption or partial renders.

## Solution

The solution involves using `Promise.all` to ensure all `fetch` calls complete before rendering. This guarantees data integrity and avoids race conditions.