import { useEffect, useState } from "react";

// SearchPosts: a small search component that queries a remote API
// as the user types. It demonstrates debouncing user input with
// a timeout, handling loading/error states, and rendering results.
const SearchPosts = () => {
    // filterResults: array of posts returned from the API that match the query
    const [ filterResults, setFilterResults ] = useState([]);

    // word: the current value of the input field (updates every keystroke)
    const [ word, setWord ] = useState("");

    // debounceWord: a debounced version of `word` that updates after a short delay.
    // We use this to avoid calling the API on every keystroke.
    const [ debounceWord, setDebounceWord ] = useState("");

    // isLoading / error: UI state for async fetch lifecycle
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    // --- Debounce effect ---
    // When `word` changes, start a short timer (300ms). If the user types again
    // before the timer finishes, the previous timer is cleared. Only when the
    // user pauses for 300ms do we update `debounceWord` which triggers the fetch.
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceWord(word);
        }, 300);

        // Cleanup: clear the timeout if `word` changes before 300ms.
        return () => clearTimeout(timer);
    }, [word]);

    // --- Fetch effect ---
    // Runs when `debounceWord` changes. Responsible for querying the API,
    // updating `filterResults`, and managing loading/error UI state.
    useEffect(() => {
        // Helper to perform the async fetch. Declared inside effect so it can
        // access the current `debounceWord` value without extra parameters.
        const filterData = async () => {
            // If debounced input is empty (or only whitespace), clear results and return.
            if (!debounceWord.trim()) {
                setFilterResults([]);
                return;
            }

            setIsLoading(true);
            setError(null);

            try {
                // Query a simple JSON placeholder API using the `title_like` filter
                // which returns posts whose title contains the provided substring.
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?title_like=${debounceWord}`
                );

                // Convert response to JSON. Real code should check response.ok
                // and handle HTTP errors more precisely; this example keeps it
                // simple for clarity.
                const data = await response.json();
                console.log("search results:", data);

                // Only set results if there is still a `word` value. This protects
                // against a race where the input was cleared while the fetch was
                // still in-flight. We use `word` (latest input), not `debounceWord`,
                // to reflect the user's current intent.
                if (word) {
                    setFilterResults(data);
                } else {
                    setFilterResults([]);
                }

            } catch (error) {
                // Save the error to show to the user. In production you might
                // want to normalize or log the error elsewhere.
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        // Trigger the fetch for the current debounced word.
        filterData();
    }, [debounceWord, word]); // run when debounced value changes; include `word` to satisfy linter

    // Input change handler: update `word` on every keystroke.
    const handleChange = (event) => {
        setWord(event.target.value);
    };

    // --- Simple UI states ---
    // Show loading or error states early to avoid rendering the rest of the UI
    // while the fetch is in progress or if an error occurred.
    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: { error.message }</p>;
    }


    return (
        <>
            <div className="p-5">
                {/*
                  Input field:
                  - `onChange` updates `word` on every keystroke.
                  - `value` is controlled by React so the input reflects state.
                */}
                <input
                    className="bg-red-500 text-white p-10 rounded-xl font-bold border focus:border-green-400"
                    onChange={handleChange}
                    placeholder="Search for a post!"
                    value={word}
                />

                {/* Guidance and empty-state messages */}
                {!isLoading && debounceWord && filterResults === 0 && (
                    <p>No posts found for "{debounceWord}"</p>
                )}

                {!isLoading && !debounceWord && (
                    <p>Type to search posts</p>
                )}

                {/* Render search results as a list of titles. Each item needs a key. */}
                {filterResults.map((result) => {
                    return <li key={result.id}>{result.title}</li>;
                })}
            </div>
        </>
    );
};


export default SearchPosts;