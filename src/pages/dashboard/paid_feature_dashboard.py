import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import json
from urllib.parse import unquote

query_params = st.experimental_get_query_params()
data_json = unquote(query_params.get('data', ['[]'])[0]) 
data_list = json.loads(data_json)

if data_list:
    for i, data in enumerate(data_list):
        st.title(f"Similar Apps Data Dashboard (Response {i + 1})")

        if "similar_apps" in data:
            df = pd.DataFrame(data['similar_apps'])

            st.subheader("Data Table")
            st.write(df)

            st.subheader("Rating Distribution")
            plt.figure(figsize=(10, 5))
            df['rating'].plot(kind='hist', bins=10, edgecolor='black')
            plt.title('Rating Distribution')
            plt.xlabel('Rating')
            plt.ylabel('Frequency')
            st.pyplot(plt)

            st.subheader("Reviews vs. Installs")
            plt.figure(figsize=(10, 5))
            plt.scatter(df['reviews'], df['installs'], alpha=0.7)
            plt.title('Reviews vs. Installs')
            plt.xlabel('Reviews')
            plt.ylabel('Installs')
            st.pyplot(plt)

            st.subheader("Aggregation Statistics")
            st.write("**Mean Values:**")
            st.json(data['aggregation']['mean'])
            st.write("**Standard Deviation:**")
            st.json(data['aggregation']['std'])

        else:
            st.error(f"No data found for response {i + 1}. Please make sure data is passed correctly.")
else:
    st.error("No data found. Please make sure data is passed correctly.")
