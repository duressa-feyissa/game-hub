import useGenres from "./useGenres";

const usePlatform = (id?: number) => {
    const { data: platforms } = useGenres();
    return platforms?.results.find(
      (platform) => platform.id === id
    );
}

export default usePlatform
