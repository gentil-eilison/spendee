"use client";

import SpendeeApi from "@/classes/SpendeeApi";
import TypographyH1 from "@/components/TypographyH1";
import TypographyH2 from "@/components/TypographyH2";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";

export interface AddTransactionData {
    type: string;
    amount: number;
    category: string;
    date: string;
    description: string;
}

export default function AddTransaction() {
    const form = useForm<AddTransactionData>({
        defaultValues: {
            type: "",
            amount: 0.00,
            category: "",
            date: new Date().toISOString().split("T")[0],
            description: ""
        }
    });

    async function onSubmit(data: AddTransactionData) {
        const spendee = new SpendeeApi();
        const response = await spendee.postTransaction(data);
        if (response) {
            form.reset();
        }
    }

    return (
        <Card>
            <CardHeader>
                <header>
                    <TypographyH1>Add New Transaction</TypographyH1>
                    <TypographyH2>Record your income or expense</TypographyH2>
                </header>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form 
                        id="add-transaction-form" 
                        onSubmit={form.handleSubmit(onSubmit)} 
                        className="flex flex-col gap-6"
                    >
                        <fieldset className="flex flex-col gap-4 md:grid md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                            <Select onValueChange={field.onChange} required {...field}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select a type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="expense">Expense</SelectItem>
                                                        <SelectItem value="income">Income</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                    </FormItem>
                                )}
                            >
                            </FormField>
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input placeholder="0.00" type="number" min={0.00} {...field}/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            >
                            </FormField>
                        </fieldset>
                        <fieldset className="flex flex-col gap-4 md:grid md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type</FormLabel>
                                            <Select onValueChange={field.onChange} required {...field}>
                                                <FormControl>
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="rent">Rent</SelectItem>
                                                        <SelectItem value="groceries">Groceries</SelectItem>
                                                        <SelectItem value="utilities">Utilities</SelectItem>
                                                        <SelectItem value="entertainment">Entertainment</SelectItem>
                                                        <SelectItem value="transportation">Transportation</SelectItem>
                                                        <SelectItem value="healthcare">Healthcare</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                    </FormItem>
                                )}
                            >
                            </FormField>
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Date</FormLabel>
                                        <FormControl>
                                            <Input type="date" required {...field}/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            >
                            </FormField>
                        </fieldset>
                        <fieldset className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Enter description" required {...field}/>
                                        </FormControl>
                                    </FormItem>
                                )}
                            >
                            </FormField>
                            <Button className="w-full hover:cursor-pointer" type="submit"><Plus />Add Transaction</Button>
                        </fieldset>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}