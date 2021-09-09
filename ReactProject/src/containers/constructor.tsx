import React from "react";
import useHookGetIngredientsByGroups from "../graphql/hooks/hook-get-ingredients-by-groups";
import ConstructorView from "../views/constructor";

const Constructor: React.FC = () => {
  const { loading, error, data } = useHookGetIngredientsByGroups();

  return (
    <ConstructorView
      loading={loading}
      error={error}
      data={data}
    ></ConstructorView>
  );
};

export default Constructor;
