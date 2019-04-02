import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

// import { Container } from './styles';

const TodoList = ({ todos, dispatch }) => (
  <View style={{ flex: 1, backgroundColor: '#fff', justifyContent: 'center' }}>
    {todos.map(todo => (
      <Text
        onPress={() => dispatch({ type: 'MARK_AS_COMPLETED', id: todo.id })}
        style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}
        key={todo.id}
      >
        {todo.text}
      </Text>
    ))}
    <Button
      title="Adicionar todo"
      onPress={() => dispatch({ type: 'ADD_TODO', text: 'Novo Todo' })}
    />
  </View>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
