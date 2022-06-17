/**
 * Format string replacing index mustaches by arguments.
 * @param message The message to process.
 * @param args Arguments to be replaced.
 * @returns A formatted string.
 */
function format(message: string, ...args: string[]) {
    args.forEach((arg, index) => {
        message = message.replace(`{${index}}`, arg)
    })
    return message
}

export default {
    format,
}
