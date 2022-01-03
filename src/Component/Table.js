import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useState ,useEffect} from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import AddPop from './AddPop';
import Header from './Header';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});
const TableData=(props)=>{
    const classes = useStyles();
    const [open,setOpen]=useState(false);
    const [data,setData]=useState([]);
   
    useEffect(() => {
        getData();
    }, [])

    const getData=()=>{
        axios.get('http://localhost:8000/getEmployee').then((ans)=>{
            console.log(ans.data);
            setData([...ans.data]);
        })
    }

    const submit=(data)=>{
        setOpen(false);
        let formData=new FormData();
        formData.append('myFile',data.img);
        formData.append('name',data.name);
        formData.append('role',data.role);
        formData.append('description',data.desc);
        formData.append('created_on',new Date());
        formData.append('last_updated_on',new Date());
        formData.append('active',true);
        axios.post('http://localhost:8000/AddClient',formData,{headers: {
            'Content-Type': 'multipart/form-data'
          }}).then(()=>
        {
            alert('added success fully');
            getData();
        })

    }

    const deleteuser=(id)=>{
        axios.post('http://localhost:8000/deleteClinet',{id:id}).then((ans)=>{
            if(ans.data.staus)
            {
                alert('Delete Success fully');
                getData();
            }
        })
    }
      return  <div >
                <div style={{disply:'flex',width:'80%',marginTop:'20px',}}>
                <Button onClick={()=>setOpen(true)}>Add Data</Button>
                <Button onClick={()=>props.history.push('/')}>Home</Button>
                </div>
                <AddPop open={open} close={()=>setOpen(false)} submit={submit}/>
                <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell align='center'>Sr no.</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="right">Role</TableCell>
                            <TableCell align="right">description</TableCell>
                            <TableCell align="right">Active</TableCell>
                            <TableCell align="right">Created on</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {data.map((row,index) => (
                            <TableRow key={row.name}>
                             <TableCell align="center">{index+1}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.role}</TableCell>
                            <TableCell align="right">{row.description}</TableCell>
                            <TableCell align="right">{row.active?"Yes":"No"}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            <TableCell align="right" onClick={()=>deleteuser(row._id)} ><DeleteIcon /></TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </div>
        </div>
}
export default withRouter(TableData);