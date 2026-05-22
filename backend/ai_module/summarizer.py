from transformers import pipeline

summarizer = pipeline(
    "summarization",
    model="facebook/bart-large-cnn"
)

def summarize_text(text):

    # SPLIT LONG TEXT INTO SMALLER CHUNKS
    max_chunk = 800

    text_chunks = []

    for i in range(0, len(text), max_chunk):

        chunk = text[i:i + max_chunk]

        text_chunks.append(chunk)

    summaries = []

    # SUMMARIZE EACH CHUNK
    for chunk in text_chunks:

        summary = summarizer(
            chunk,
            max_length=80,
            min_length=20,
            do_sample=False
        )

        summaries.append(
            summary[0]["summary_text"]
        )

    # COMBINE ALL SUMMARIES
    final_summary = " ".join(summaries)

    return final_summary