import React, { useEffect } from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { catFactsURI } from '../../constants/uriConstants';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCatFacts } from '../../fetchHooks/useCatFacts';

const CatFactDisplay = () => {

    const { data, isLoading, isError, refetch } = useCatFacts();

    let body;

    if (isLoading) {
        body = <Typography variant="body1">Loading Cat Fact...</Typography>
    }

    if (isError) {
        body = <Typography variant="body1">Error Fetching Cat Fact</Typography>;
    }

    if (data) {
        body = <Typography data-testid="valid-fact" variant="body1">{data.fact}</Typography>;
    }

    useEffect(() => {
        refetch();
    }, [])

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
                        <Typography role='header' variant="h3">Cat Fact:</Typography>
                        {body}
                        <CardActions>
                            <Button aria-description='Refresh Cat Fact' onClick={() => refetch()}>Refresh</Button>
                        </CardActions>
                    </>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CatFactDisplay;
