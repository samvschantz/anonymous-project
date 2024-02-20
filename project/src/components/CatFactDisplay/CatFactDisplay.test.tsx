import React from 'react';
import { render, screen } from '@testing-library/react';
import CatFactDisplay from './CatFactDisplay';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

test('Contains refresh button', () => {
    const app = render(
        <QueryClientProvider client={queryClient}>
            <CatFactDisplay />
        </QueryClientProvider>
    );

    const buttonElement = app.getByText("Refresh")

    expect(buttonElement).toBeTruthy();
});

test.todo("useCatFacts is called once per button click");

test.todo("Error causes error text to be visible");

test.todo("Loading text visible when next cat fact is loading");

test.todo("Loading text visible when next cat fact is loading");
