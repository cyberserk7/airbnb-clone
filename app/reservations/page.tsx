import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservation";
import Container from "../components/container";
import EmptyState from "../components/empty-state";
import ReservationsClient from "./ReservationClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Error" subtitle="Please login" />;
  }

  const reservations = await getReservation({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found"
        subtitle="Looks like you have no reservations on your properties."
      />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
};

export default ReservationsPage;
