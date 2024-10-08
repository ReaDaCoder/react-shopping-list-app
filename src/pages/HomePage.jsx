import React, {useState} from 'react';
import { useDispatch } from 'react-redux';


function AddItem(){
    const [input, setInput] =useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();

        dispatch(addItems(input))
        setInput('')
    }
    return(
        <div>
        <h1>Shopping List</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="#">Shopping List</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item active">
      <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link</a>
    </li>
  </ul>
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>
<form class="form-inline">
<div class="form-group mb-2">
  <label for="staticEmail2" class="sr-only">List Items</label>
  <input type="text"  id="staticEmail2" onChange={(e) => setListItems(e.target.value)}/>
</div>
<button type="submit" class="btn btn-primary mb-2">Add item</button>
</form>

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

export default AddTodo




/*import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { Table } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { addItems } from '../Features/todo/slice';


export default function HomePage(){

  const postData = () =>{
    axios.post('http://localhost:3000/items', {
      items
  })
}


  const setData = (data) => {
    localStorage.setItem('ID', id);
  localStorage.setItem('Added Items', listItem);
    console.log(listItem);
}
    return(
        <div>
          <h1>Shopping List</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Shopping List</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">List Items</label>
    <input type="text"  id="staticEmail2" onChange={(e) => setListItems(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Add item</button>
</form>

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
}*/