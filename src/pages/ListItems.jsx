import React from 'react';
 import { useSelector } from 'react-redux';

 function ListItems(){
    const todos = useSelector((state) =>{state})
    return(
        <div className="read-container">
            <div>Shopping List</div>
        <Table singleLine>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>Items</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>

              <Table.Body>
              {APIData.map((data) => {
   return (
     <Table.Row>
        <Table.Cell>{data.ItemsName}</Table.Cell>
      </Table.Row>
 )})}
              </Table.Body>
              <Table.Cell>
 <Button onClick={() => onDelete(data.id)}>Delete</Button>
</Table.Cell>
          </Table>
        </div>
    )
 }