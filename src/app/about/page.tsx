import TypographyH1 from "@/components/TypographyH1";

export default function About() {
    return (
        <div className="mt-4 flex flex-col gap-5">
            <section>
                <TypographyH1>What is Spendee?</TypographyH1>
                <p>
                    Spendee is a simple financial tracker application where you
                    register your incomes and expenses. It is presented as a SPA,
                    which means you'll never have to leave the page to use it, avoiding
                    workflow interruption.
                </p>
            </section>
            <section>
                <TypographyH1>Do I need an account to use it?</TypographyH1>
                <p>
                    Yes, you do. We'll store only the necessary information about
                    your transactions, enough to make you spend your money wiser.
                    You don't need to pay a subscription, it's completely free :)
                </p>
            </section>
        </div>
    );
}