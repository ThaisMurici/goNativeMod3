import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

// import { Container } from './styles';

const TodoList = ({ todos, dispatch }) => (
  <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
    {todos.map(todo => (
      <Text key={todo}>{todo}</Text>
    ))}
    <Button
      title="Adicionar todo"
      onPress={() => dispatch({ type: 'ADD_TODO', text: 'Novo Todo' })}
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state,
});

export default connect(mapStateToProps)(TodoList);
