import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

const ProtectedRouter = ({
  canActivate,
  redirectPath = '/'
}) => {
  if (!canActivate) {
    return <Navigate to = {redirectPath} replace> </Navigate>
  }
  return <Outlet/>;
}
export default ProtectedRouter;