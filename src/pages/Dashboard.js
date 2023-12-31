import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';
import Hero from '../components/Hero';
import Button from '../components/Button';
import { loadDashboard } from '../actions/dashboard-action';

const Dashboard = () => {
  const { dashboardContent } = useLoaderData();

  const noPermissionMessege = (
    <>
      <p>
        Nie masz uprawnień, aby zobaczyć tę stronę. Treść dostępna tylko dla
        zalogowanych użytkowników.
      </p>
      <Button link='/login' title='Zaloguj się' btnClasses='btn btn-primary' />
    </>
  );

  return (
    <Suspense fallback={<p className='text-center'>Loading...</p>}>
      <Await resolve={dashboardContent}>
        {(loadedDashboard) => {
          if (!loadedDashboard.correct) {
            return noPermissionMessege;
          } else {
            return (
              <Hero title='Dashboard'>
                <p className='col-md-8 fs-4'>{loadedDashboard.message}</p>
              </Hero>
            );
          }
        }}
      </Await>
    </Suspense>
  );
};

export default Dashboard;

export function loader() {
  return defer({
    dashboardContent: loadDashboard(),
  });
}
