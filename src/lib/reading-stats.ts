const WORDS_PER_MINUTE = 200

export function getReadingStats(markdown: string) {
  const plainText = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_~|-]/g, " ")

  const wordCount = plainText
    .split(/\s+/)
    .filter((word) => word.length > 0).length

  const readingTime = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE))

  return { wordCount, readingTime }
}
