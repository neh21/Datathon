#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns


# In[15]:


df = pd.read_csv("C:\\Users\\hp\\Downloads\\VictimInfoDetails (1).csv")
df.size


# In[16]:


df1 = pd.read_csv("C:\\Users\\hp\Downloads\\FIR_Details_Data.csv")
df1.size


# In[18]:


df.isnull().sum()


# In[20]:


df.dropna(inplace=True)
print(df.head())


# In[21]:


df1.dropna(inplace=True)
print(df.head())


# In[23]:


df2 = pd.read_csv("C:\\Users\\hp\\Downloads\\AccusedData.csv")


# In[24]:


df2.dropna(inplace=True)
print(df2.head())


# In[26]:


plt.figure(figsize=(7, 4))
sns.histplot(df2['age'], bins=20, kde=True, color='blue')
plt.title('Age Distribution of Accused Individuals')
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.show()


# In[27]:


plt.figure(figsize=(7, 4))
sns.histplot(df['age'], bins=20, kde=True, color='skyblue')
plt.title('Age Distribution of victim Individuals')
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.show()


# In[31]:


print(df['age'].unique())


# In[33]:


plt.figure(figsize=(10, 6))
sns.countplot(df1['FIR Type'], palette='pastel')
plt.title('Types of Offenses')
plt.xlabel('Offense Type')
plt.ylabel('Count')
plt.xticks(rotation=45)
plt.show()


# In[34]:


plt.figure(figsize=(5, 5))
sns.countplot(df2['Sex'], palette='pastel')
plt.title('Gender Distribution of Accused Individuals')
plt.xlabel('Sex')
plt.ylabel('Count')
plt.show()


# In[36]:


print(df2['Profession'].unique())


# In[44]:


plt.figure(figsize=(12,10))
sns.countplot(df2['Profession'], palette='dark')
plt.title('Socioeconomic Status Distribution of Accused Individuals')
plt.xlabel('Socioeconomic Status')
plt.ylabel('Count')
plt.xticks(rotation=45)
plt.show()


# In[ ]:


df2.columns


# In[ ]:


df2_age = df2.groupby('Age').size().reset_index(name = 'Numbers')
df2_age


# In[ ]:




