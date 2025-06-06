import TypographyProps from "@/interfaces/Typography"

export default function TypographyH1({ children }: TypographyProps) {
    return (
        <h1 className="font-bold text-2xl">
            { children }
        </h1>
    )
}