import React from "react";
import { useRouter } from "next/router";

function User() {
  const router = useRouter();
  const { id, ...rest } = router.query;

  return (
    <div>
      <h2>User Id = {id}</h2>
      <h2>{JSON.stringify(rest)}</h2>
    </div>
  );
}

export default User;
