import pandas as pd

def clean_excel(file_path):

    # READ EXCEL FILE
    df = pd.read_excel(file_path)

    # REMOVE DUPLICATES
    df.drop_duplicates(inplace=True)

    # FILL EMPTY VALUES
    df.fillna("Missing", inplace=True)

    # GENERATE SUMMARY
    summary = {

        "rows": len(df),

        "columns": list(df.columns),

        "missing_values": df.isnull().sum().to_dict()

    }

    return summary