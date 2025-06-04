import TypographyProps from "@/interfaces/Typography"

export default function TypographyH1({ children }: TypographyProps) {
    return (
        <h1 className="font-bold text-4xl">
            { children }
        </h1>
    )
}