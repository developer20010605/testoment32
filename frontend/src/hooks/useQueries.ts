import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useGetMessage() {
  const { actor, isFetching } = useActor();

  return useQuery<string>({
    queryKey: ['message'],
    queryFn: async () => {
      if (!actor) return 'Hello World';
      return actor.getMessage();
    },
    enabled: !!actor && !isFetching,
  });
}
