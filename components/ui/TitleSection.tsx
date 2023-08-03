type TitleProps = {
    title: string
}

export const TitleSection = ({ title }: TitleProps) => {
    return (
        <h2 className="text-3xl font-semibold text-green-800">_{title}</h2>
    )
}