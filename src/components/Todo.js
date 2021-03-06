import React, { Component } from 'react'
import { debounce } from 'underscore'
import classNames from 'classnames'
import TodoItem from '../styled/TodoItem'
import TodoCheckBox from '../styled/TodoCheckBox'
import TodoText from '../styled/TodoText'
import DeleteBtn from '../styled/DeleteBtn'

class Todo extends Component {
  constructor (props) {
    super(props)
    this.handleOnChange = debounce(this.props.handleOnChange, 500)
  }

  render () {
    const { isToday, handleOnCheck, completed, handleDelete, text, name } = this.props

    return (
      <TodoItem>
        <TodoCheckBox
          defaultChecked={completed}
          onCheck={handleOnCheck}
        />
        <TodoText
          className={classNames({
            completed: completed,
            today: isToday
          })}
          name={name}
          defaultValue={text}
          fullWidth
          multiLine
          disabled={completed}
          lineThrough={completed}
          redText={isToday}
          underlineStyle={{borderColor: 'transparent'}}
          underlineDisabledStyle={{border: 'none'}}
          onChange={() => {
            this.handleOnChange(this.input.getValue())
          }}
          innerRef={node => this.input = node}
        />
        <DeleteBtn
          onClick={handleDelete}
        />
      </TodoItem>
    )
  }
}

export default Todo
