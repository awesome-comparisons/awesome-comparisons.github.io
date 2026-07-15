---
title: Concurrency
description: How JavaScript, TypeScript, Python, Go, Rust, Java, Kotlin, Swift, C, C++, C#, Ruby, PHP, and Elixir approach concurrent and parallel execution.
---

## JavaScript

Runs on a single-threaded event loop with non-blocking I/O; concurrency is
expressed through Promises and `async`/`await`. True parallelism requires
separate Web Workers or Node's `worker_threads`, since there's no
shared-memory threading by default.

## TypeScript

Layers typed Promises and async function signatures on top of
JavaScript's event-loop model, but introduces no new concurrency
primitives of its own — the runtime behavior is identical to JavaScript.

## Python

The Global Interpreter Lock (GIL) limits the `threading` module's
usefulness for CPU-bound parallelism, so `multiprocessing` is used for true
parallel execution. `asyncio` provides cooperative, single-threaded
concurrency via `async`/`await`.

## Go

Goroutines are cheap, runtime-scheduled concurrent functions, communicating
through channels following a CSP-style model. `select` multiplexes over
channel operations, and the `sync` package offers lower-level primitives
like mutexes and wait groups.

## Rust

The ownership and borrowing system enforces "fearless concurrency" at
compile time via the `Send`/`Sync` traits. Supports OS threads
(`std::thread`) directly, plus `async`/`await` backed by external runtimes
like Tokio, along with channels and locks in the standard library.

## Java

Built on native OS threads, with `java.util.concurrent` providing
executors, locks, and atomic types. `CompletableFuture` composes
asynchronous pipelines, and recent versions add virtual threads (Project
Loom) for much lighter-weight concurrency.

## Kotlin

Coroutines are the primary concurrency model: `suspend` functions,
structured concurrency scoped by coroutine builders, and `Flow` for
asynchronous streams. Coroutines interoperate with underlying Java threads
but avoid blocking them.

## Swift

Modern Swift uses structured concurrency with `async`/`await`, `Task`, and
task groups, plus actors that protect shared mutable state from data races.
Grand Central Dispatch (GCD) remains the underlying (and still-used legacy)
queue-based system.

## C

Provides no concurrency primitives itself; concurrent programs rely on
platform threading APIs like POSIX threads (pthreads) and manual
synchronization with mutexes and condition variables.

## C++

Offers `std::thread`, `std::mutex`/`condition_variable`, and task-based
concurrency via `std::async`/futures/promises. Atomics and a formal memory
model have been standardized since C++11.

## C#

Centers on the Task-based Asynchronous Pattern with `async`/`await` and the
Task Parallel Library (TPL), backed by a managed thread pool. Async
streams and concurrent collections (`System.Collections.Concurrent`) round
out the model.

## Ruby

Threads exist but are constrained for CPU-bound work by the Global VM Lock
(GVL). Fibers provide lightweight cooperative concurrency, while Ractors
offer true parallelism with isolated state; async libraries often build
cooperative concurrency on top of fibers.

## PHP

Traditionally a single-threaded, share-nothing, one-process-per-request
model. True threading is available only through extensions (e.g.,
pthreads) and is rarely used; modern async workloads instead rely on
event-loop libraries (ReactPHP, Swoole) or native Fibers (PHP 8.1+).

## Elixir

Runs on the BEAM VM's lightweight, isolated processes that communicate
purely through message passing rather than shared memory. OTP behaviors
like GenServer and Supervisor structure concurrent, fault-tolerant systems,
allowing millions of cheap concurrent processes.
