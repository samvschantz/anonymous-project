import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { catFactsURI } from '../../constants/uriConstants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

type CatFact = {
    fact: string,
    length: number 
}

const CatFactDisplay = () => {


    const fetchCatFacts = () =>
        fetch(catFactsURI).then((res) =>
            res.json(),
        )

    const { data, isLoading, isError, refetch } = useQuery<CatFact>({
        queryKey: ['catFact'],
        queryFn: fetchCatFacts,
        staleTime: Infinity,
        enabled: false,
    })

    let body;

    if (isLoading) {
        body = <Typography variant="body1">Loading Cat Fact...</Typography>
    }

    if (isError) {
        body = <Typography variant="body1">Error Fetching Cat Fact</Typography>;
    }

    if (data) {
        body = <Typography variant="body1">{data.fact}</Typography>;
    }

    return (
        <Box
            component="section"
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Card
                sx={{
                    width: '50%'
                }}
            >
                <CardContent>
                    <>
                        <Typography aria-role='header' variant="h3">Cat Fact:</Typography>
                        {body}
                        <CardActions>
                            <Button aria-role='button' aria-description='Refresh Cat Fact' onClick={() => refetch()}>Refresh</Button>
                        </CardActions>
                    </>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CatFactDisplay;
