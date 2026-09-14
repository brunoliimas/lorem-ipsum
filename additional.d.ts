declare namespace NodeJS {
    interface ProcessEnv {
        NEXT_PUBLIC_FORM: string
        NEXT_PUBLIC_MAINTENANCE_MODE?: string
        QUOTE_DISABLED?: string
        QUOTE_PASSWORD?: string
        QUOTE_SESSION?: string
    }
}