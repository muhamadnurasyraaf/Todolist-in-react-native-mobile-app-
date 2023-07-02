import React, {useState} from "react";
import { FlatList, StyleSheet, Text , TouchableOpacity, View } from "react-native";
import Header from './components/header';

export default function App(){
  const [people,setPeople] = useState([
    {name:'Ahmad',id:'12'},
    {name:'Muaz',id:'32'},
    {name:'Ikhmal',id:'8'},
    {name:'Asyraaf',id:'35'},
  ]);

  const [todoList,setTodoList] = useState([
    { title:'Wash Car' , id:'1' },
    { title:'Buy Coffee' , id:'2' },
    { title:'Develop Mobile App' , id:'3' },
    { title:'Get plat ranking' , id:'4' },
    { title:'Git Push' , id:'5' },
  ])

  const deleteTodo = (id) =>{
    setTodoList((prevTodo) =>{
      return prevTodo.filter( todo => todo.id !== id);
    })
  }

  return(
    <View style={styles.container}>
    <Header />
      <View style={styles.content}>
       <View style={styles.list}>
          <FlatList
            data={todoList}
            renderItem={ ({item}) => (
              <View style={styles.item}>
                <Text >{item.title}</Text>
                <TouchableOpacity style={styles.btn} onPress={ () => deleteTodo(item.id)}>
                  <Text style={styles.text}>Done</Text>
                </TouchableOpacity>
              </View>
             
            ) }
          />
       </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  item:{
    backgroundColor:'pink',
    padding:20,
    margin:8,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  btn:{
    backgroundColor:'cyan',
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:10
  },
  text:{
    color:'#fff',
    fontWeight:'bold'
  }
})