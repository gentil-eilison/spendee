import TypographyProps from "@/interfaces/Typography";

export default function TypographyH2({ children }: TypographyProps) {
    return (
        <h2 className="text-3xl">{ children }</h2>
    );
}