---
title: Concurrency
description: How different programming languages approach concurrent and parallel execution.
---

## JavaScript

Runs on a single-threaded event loop with non-blocking I/O; concurrency is
expressed through Promises and `async`/`await`. True parallelism requires
separate Web Workers or Node's `worker_threads`, since there's no
shared-memory threading by default.

## Python

The Global Interpreter Lock (GIL) limits the `threading` module's
usefulness for CPU-bound parallelism, so `multiprocessing` is used for true
parallel execution. `asyncio` provides cooperative, single-threaded
concurrency via `async`/`await`.

## TypeScript

Layers typed Promises and async function signatures on top of
JavaScript's event-loop model, but introduces no new concurrency
primitives of its own — the runtime behavior is identical to JavaScript.

## Java

Built on native OS threads, with `java.util.concurrent` providing
executors, locks, and atomic types. `CompletableFuture` composes
asynchronous pipelines, and recent versions add virtual threads (Project
Loom) for much lighter-weight concurrency.

## C#

Centers on the Task-based Asynchronous Pattern with `async`/`await` and the
Task Parallel Library (TPL), backed by a managed thread pool. Async
streams and concurrent collections (`System.Collections.Concurrent`) round
out the model.

## C++

Offers `std::thread`, `std::mutex`/`condition_variable`, and task-based
concurrency via `std::async`/futures/promises. Atomics and a formal memory
model have been standardized since C++11.

## C

Provides no concurrency primitives itself; concurrent programs rely on
platform threading APIs like POSIX threads (pthreads) and manual
synchronization with mutexes and condition variables.

## PHP

Traditionally a single-threaded, share-nothing, one-process-per-request
model. True threading is available only through extensions (e.g.,
pthreads) and is rarely used; modern async workloads instead rely on
event-loop libraries (ReactPHP, Swoole) or native Fibers (PHP 8.1+).

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

## Kotlin

Coroutines are the primary concurrency model: `suspend` functions,
structured concurrency scoped by coroutine builders, and `Flow` for
asynchronous streams. Coroutines interoperate with underlying Java threads
but avoid blocking them.

## Ruby

Threads exist but are constrained for CPU-bound work by the Global VM Lock
(GVL). Fibers provide lightweight cooperative concurrency, while Ractors
offer true parallelism with isolated state; async libraries often build
cooperative concurrency on top of fibers.

## Dart

Uses a single-threaded event loop with `async`/`await`/`Future`/`Stream`
for cooperative concurrency, so code within an isolate never races on
shared memory. True parallelism comes from isolates — independent workers
with their own memory that communicate only via message passing.

## Swift

Modern Swift uses structured concurrency with `async`/`await`, `Task`, and
task groups, plus actors that protect shared mutable state from data races.
Grand Central Dispatch (GCD) remains the underlying (and still-used legacy)
queue-based system.

## Perl

Has threads via the `threads` module, but they are heavyweight (each
thread duplicates the interpreter's data) and rarely used in practice.
More commonly, concurrency is achieved with forked processes or
event-loop libraries such as `AnyEvent` or `POE`.

## Elixir

Runs on the BEAM VM's lightweight, isolated processes that communicate
purely through message passing rather than shared memory. OTP behaviors
like GenServer and Supervisor structure concurrent, fault-tolerant systems,
allowing millions of cheap concurrent processes.

## Scala

Runs on the JVM and can use raw threads directly, but idiomatically relies
on `Future`s for asynchronous composition and richer effect/actor
libraries — Akka for actor-based concurrency, and ZIO or Cats Effect for
structured, functional effect systems.

## Clojure

Provides atoms, refs, and agents as managed alternatives to raw locks for
coordinating shared state, plus software transactional memory for refs.
`core.async` adds CSP-style channels and `go` blocks for asynchronous,
sequential-looking code, all running on top of JVM threads.

## Haskell

The GHC runtime manages lightweight, cheaply-forked green threads via
`forkIO`, scheduled cooperatively across OS threads. Safe shared state
uses `MVar` for simple synchronization or STM (software transactional
memory) for composable atomic transactions, with the `async` library
providing higher-level concurrency combinators.
