import React from "react";
import { useGetAPIDataQuery } from "../../slices/sampleAPISlice";
import { useAppDispatch, useAppSelector } from "../../app/store";
import LoadingElement from "../../components/LoadingElement";
import { increaseCount } from "../../slices/counterSlice";
import { Button } from "primereact/button";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.count);

  const {
    data: apiData,
    isLoading: isAPIDataLoading,
    isError: isAPIDataError,
    error: APIDataError,
  } = useGetAPIDataQuery({});

  // const [updatePost, { isLoading: isUpdating }] = useUpdatePostMutation();

  return (
    <>
      <LoadingElement isLoading={isAPIDataLoading} width="50%">
        <div>{apiData}</div>
      </LoadingElement>
      <Button
        label={count.toString()}
        onClick={() => {
          dispatch(increaseCount({ amount: 2 }));
        }}
      />
    </>
  );
};

export default Home;
