import TypographyProps from "@/interfaces/Typography";

export default function TypographyH2({ children }: TypographyProps) {
    return (
        <h2 className="text-xl text-gray-600">{ children }</h2>
    );
}