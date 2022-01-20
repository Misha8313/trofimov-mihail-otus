import { ApolloError } from "@apollo/client";
import { Maybe} from "../graphql/types"

export type CustomHookResult<T> = 
{
    loading: boolean,
    error: Maybe<ApolloError>,
    data: Maybe<T>
}
