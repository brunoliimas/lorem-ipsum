type SubtitleProps = {
    subtitle: string
}

export const Subtitle = ({ subtitle }: SubtitleProps) => {
    return (
        <h3 className="text-xl font-semibold">{subtitle}</h3>
    )
}