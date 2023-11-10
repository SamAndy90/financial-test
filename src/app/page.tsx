import { Container } from "@/common/ui";
import FormulaInput from "@/components/FormulaInput";
import InputsList from "@/components/InputsList/InputsList";
import InputsTitle from "@/components/InputsTitle/InputsTitle";
import MainTitle from "@/components/MainTitle";
import Table from "@/components/Table";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
    // const queryClient = new QueryClient();

    return (
        // <QueryClientProvider client={queryClient}>
        <main className="bg-gray-200 h-full">
            <Container>
                <MainTitle />
                <Table>
                    <div className="basis-1/3">
                        <InputsTitle />
                        <InputsList />
                    </div>
                    <div>
                        <FormulaInput />
                        <p className="p-2 text-xl">Unfortunately that&#39;s all I did in 6 hours.</p>
                        <p className="p-2 text-xl">Thank you for this opportunity.</p>
                    </div>
                </Table>
            </Container>
        </main>
        // </QueryClientProvider>
    );
}
