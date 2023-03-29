import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification.length > 0 ? notification : 'No Notification'}
    </div>
  )
}

export default Notification