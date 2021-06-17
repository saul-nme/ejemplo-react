import React, { useState, useCallback, useEffect } from 'react'
import { Avatar, Button, Card, Filters, Page, ResourceItem, ResourceList, TextField, TextStyle } from '@shopify/polaris';

export default function Home() {
   const [pokemons, setPokemons] = useState([]);
   const [loading, setLoading] = useState(true);
   const [taggedWith, setTaggedWith] = useState('VIP');
   const [queryValue, setQueryValue] = useState(null);

   const handleTaggedWithChange = useCallback(
      (value) => setTaggedWith(value),
      [],
   );
   const handleTaggedWithRemove = useCallback(() => setTaggedWith(null), []);
   const handleQueryValueRemove = useCallback(() => setQueryValue(null), []);
   const handleClearAll = useCallback(() => {
      handleTaggedWithRemove();
      handleQueryValueRemove();
   }, [handleQueryValueRemove, handleTaggedWithRemove]);

   useEffect(() => {
      async function fetchPoke() {
         const { results } = await fetch("https://pokeapi.co/api/v2/pokemon").then((result) => result.json());

         setPokemons(results);
         setLoading(false);
      }
      fetchPoke();
   }, []);

   const resourceName = {
      singular: 'customer',
      plural: 'customers',
   };

   const items = [
      {
         id: 108,
         url: 'customers/341',
         name: 'Mae Jemison',
         location: 'Decatur, USA',
      },
      {
         id: 208,
         url: 'customers/256',
         name: 'Ellen Ochoa',
         location: 'Los Angeles, USA',
      },
   ];

   const filters = [
      {
         key: 'taggedWith1',
         label: 'Tagged with',
         filter: (
            <TextField
               label="Tagged with"
               value={taggedWith}
               onChange={handleTaggedWithChange}
               labelHidden
            />
         ),
         shortcut: true,
      },
   ];

   const appliedFilters = !isEmpty(taggedWith)
      ? [
         {
            key: 'taggedWith1',
            label: disambiguateLabel('taggedWith1', taggedWith),
            onRemove: handleTaggedWithRemove,
         },
      ]
      : [];

   const filterControl = (
      <Filters
         queryValue={queryValue}
         filters={filters}
         appliedFilters={appliedFilters}
         onQueryChange={setQueryValue}
         onQueryClear={handleQueryValueRemove}
         onClearAll={handleClearAll}
      >
         <div style={{ paddingLeft: '8px' }}>
            <Button onClick={() => console.log('New filter saved')}>Save</Button>
         </div>
      </Filters>
   );

   return (
      <Page>
         <Card>
            <ResourceList
               loading={loading}
               resourceName={resourceName}
               items={pokemons}
               renderItem={renderItem}
               filterControl={filterControl}
            />
         </Card>
      </Page>
   );

   function renderItem(item) {
      const { url, name } = item;
      const media = <Avatar customer size="medium" name={name} />;

      return (
         <ResourceItem id={name} url={url} media={media}>
            <h3>
               <TextStyle variation="strong">{name}</TextStyle>
            </h3>
            <div>{url}</div>
         </ResourceItem>
      );
   }

   function disambiguateLabel(key, value) {
      switch (key) {
         case 'taggedWith1':
            return `Tagged with ${value}`;
         default:
            return value;
      }
   }

   function isEmpty(value) {
      if (Array.isArray(value)) {
         return value.length === 0;
      } else {
         return value === '' || value == null;
      }
   }
}
