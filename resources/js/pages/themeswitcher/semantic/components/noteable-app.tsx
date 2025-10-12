import React from 'react';
import { Flex, Text, Button, Box, Container } from "@radix-ui/themes";
import { useSemanticPeople } from '../hooks/use-semantic-data';

/**
 * SemanticNoteablePeopleApp - Migrated from cshop/noteable-app.tsx
 * 
 * Displays a list of notable scientists organized by profession.
 * Preserves original React logic while integrating with semantic data provider.
 */
export function SemanticNoteablePeopleApp() {
    const { chemists, everyoneElse, getImageUrl } = useSemanticPeople();

    return ( 
        <Container p={{ sm: '6', lg: '9' }}> 
            <article>
                <Flex direction="column" gap="2">
                    <Text>Hello from Radix Themes</Text>
                    <Button>Let's go</Button>
                </Flex>
                
                <h1>Scientists</h1>
                <h2>Chemists</h2>
                <ul>
                    {chemists.map(person =>
                        <li key={person.id}>
                            <Flex direction="row">
                                <img
                                    src={getImageUrl(person)}
                                    alt={person.name}
                                />
                                <Flex direction="row">
                                    <Flex direction="column">
                                        <b>{person.name}:</b>
                                        {' ' + person.profession + ' '}
                                        known for {person.accomplishment}
                                    </Flex>  
                                </Flex>
                            </Flex>
                        </li>
                    )}
                </ul>
                <h2>Everyone Else</h2>
                <ul>
                    {everyoneElse.map(person =>
                        <li key={person.id}>
                            <img
                                src={getImageUrl(person)}
                                alt={person.name}
                            />
                            <p>
                                <b>{person.name}:</b>
                                {' ' + person.profession + ' '}
                                known for {person.accomplishment}
                            </p>
                        </li>
                    )}
                </ul> 
            </article>
        </Container> 
    );
}
