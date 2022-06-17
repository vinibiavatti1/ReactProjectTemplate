/**
 * Format string replacing index mustaches by arguments.
 * @param message The message to process.
 * @param args Arguments to be replaced.
 * @returns A formatted string.
 */
function format(message: string, ...args: string[]): string {
    let internalMessage = message
    args.forEach((arg, index) => {
        internalMessage = internalMessage.replace(`{${index}}`, arg)
    })
    return internalMessage
}

export default {
    format,
}
