import {
  GetIngredientsByGroupsQuery,
  GetIngredientsByGroupsQueryVariables,
} from "./../types";
import { useQuery } from "@apollo/client";

import GET_INGREDIENTS_BY_GROUP from "../queries/query-get-ingredients-by-groups";
import { CustomHookResult } from "../../types/apollo";

const useHookGetIngredientsByGroups =
  (): CustomHookResult<GetIngredientsByGroupsQuery> => {
    const { loading, error, data } = useQuery<
      GetIngredientsByGroupsQuery,
      GetIngredientsByGroupsQueryVariables
    >(GET_INGREDIENTS_BY_GROUP);
    return { loading, error: error || null, data: data || null };
  };

export default useHookGetIngredientsByGroups;
