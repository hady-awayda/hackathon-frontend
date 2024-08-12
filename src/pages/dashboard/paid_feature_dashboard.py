import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import json
from urllib.parse import unquote

# Read the data passed via URL parameters
query_params = st.experimental_get_query_params()
data_json = unquote(query_params.get('data', ['{}'])[0])
data = json.loads(data_json)

if "similar_apps" in data:
    # Convert similar_apps to DataFrame
    df = pd.DataFrame(data['similar_apps'])

    # Streamlit app
    st.title("Similar Apps Data Dashboard")

    # Display data table
    st.subheader("Data Table")
    st.write(df)

    # Rating Distribution
    st.subheader("Rating Distribution")
    plt.figure(figsize=(10, 5))
    df['rating'].plot(kind='hist', bins=10, edgecolor='black')
    plt.title('Rating Distribution')
    plt.xlabel('Rating')
    plt.ylabel('Frequency')
    st.pyplot(plt)

    # Reviews vs. Installs Scatter Plot
    st.subheader("Reviews vs. Installs")
    plt.figure(figsize=(10, 5))
    plt.scatter(df['reviews'], df['installs'], alpha=0.7)
    plt.title('Reviews vs. Installs')
    plt.xlabel('Reviews')
    plt.ylabel('Installs')
    st.pyplot(plt)

    # Aggregation Statistics
    st.subheader("Aggregation Statistics")
    st.write("**Mean Values:**")
    st.json(data['aggregation']['mean'])
    st.write("**Standard Deviation:**")
    st.json(data['aggregation']['std'])

else:
    st.error("No data found. Please make sure data is passed correctly.")
