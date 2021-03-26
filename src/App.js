import './App.css';
import { useState } from 'react';

function App() {
    const [formData,setFormData] = useState({
        username: '',
        password: ''
    })
    const [tableData,setTableData] = useState([])
    const [error,setError] = useState('');
    const handleChange = e => {
        e.preventDefault(); 
        setError('')       
        const { name,value } = e.target;
        if(value && value.length > 0) setError('');
        switch (name){
            case 'username':
                setFormData({...formData,username: value})
                return;
            case 'password':
                setFormData({...formData,password: value})
                return;
            default:
                return;
        }
    }
    function checkAdmin(data){
        if(data && data.length > 0) return true;
    }
    const handleSubmit = e => {
        e.preventDefault();
        let formInfo = {...formData}
        const { username,password } = formInfo;
        if(checkAdmin(username) && checkAdmin(password)) {
          setTableData([...tableData,{ username,password }])
          return setFormData({...formData,username: '',password: ''})
        }
        setError('Please fill username & password');
    }
    return (
        <div className="App">
            <div className='form'>
                <div className='username'>
                    <label for='username'>Username</label>
                    <input value={formData.username} required type='text' id='username' placeholder={'Type username here'} name='username' onChange={handleChange} />
                </div>
                <div className='password'>
                    <label for='password'>Password</label>
                    <input value={formData.password} required type='password' id='password' placeholder={'Type password here'} name='password' onChange={handleChange} />
                </div>
                <div className='submit button'>
                    <button type='button' onClick={handleSubmit}>Submit</button>
                </div>
                <div className='error'>
                    {
                        error &&
                        <span>{error}</span>
                    }
                </div>
            </div>
            <div className='table' style={{marginTop:'20px'}}>
                <table style={{margin: '0 auto'}}>
                    <tr>
                        <th>S.No</th>
                        <th>name</th>
                        <th>Password</th>
                    </tr>
                    {
                        tableData && tableData.length > 0 && tableData.map((data,dataIndex) => {
                            return(
                              <tr>
                                  <td>{dataIndex + 1}</td>
                                  {data.username && <td>{data.username}</td>}
                                  {data.password && <td>{data.password}</td>}
                              </tr>
                            )
                        })
                    }                    
                </table>
            </div>
        </div>
    );
}

export default App;
